import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CategoryContext } from '../../contexts/CategoryContext.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import { useContext } from 'react';
import * as crudService from '../../services/crudService.js';

const Edit = () => {
    const navigate = useNavigate();
    const [card, setCard] = useState({});
    const [category, setCategory] = useState({value: ''});
    const [isError, setIsError] = useState(false);
    const { cardId } = useParams();
    const { categories } = useContext(CategoryContext);
    const { user } = useContext(AuthContext);

    const path = `/sounds/${cardId}`
    useEffect(() => {
        crudService.get(path)
            .then(res => {
                setCard(res);
                setCategory({value: res.category})
                console.log(res);
            })
            .catch(err => console.log(err));
    }, [path]);


    const onUpdateHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let soundUrl = formData.get('soundUrl');
        let embedId = soundUrl.split('/')
        formData.set('soundUrl', embedId[embedId.length-1]);

        const data = Object.fromEntries(formData);
        if(Object.values(data).some(x => x === '')) {
            setIsError(true);
            return;
        }
        
        const path = `/sounds/${cardId}` 
        crudService.update( path, user.accessToken, data)
            .then(res => {
                navigate('/my-sounds');
            })
            .catch(err => console.log(err));
    }
    const handleCategoryChange = (e) => {
        setCategory({value: e.target.value})
        console.log(category);
        
    }

    return (
        <div className="create-container">
            <div className="create-bcgr"></div>
            <section id="create-page" className="create">
                <form id="create-form" method="POST" onSubmit={onUpdateHandler} >
                    <fieldset>
                        <legend>Edit your sound</legend>
                        <div className="field">
                            <label htmlFor="name">Name of your sound</label>
                            <div className="input">
                                <input type="text" name="title" id="title" defaultValue={card.title} />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="name">Author's Name</label>
                            <div className="input">
                                <input type="text" name="authorName" id="authorName" defaultValue={card.authorName} />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="description">Description</label>
                            <div className="input">
                                <textarea name="description" id="description" rows="6" cols="60" maxLength="200" defaultValue={card.description} maxLength="200"></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="soundUrl">Copy Soundcloud or Youtube link</label>
                            <div className="input">
                                <input type="text" name="soundUrl" id="soundUrl" defaultValue={card.soundUrl} />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="category">Select category</label>
                            <div className="input">
                                <select id="category" name="category" value={category.value} onChange={handleCategoryChange}>
                                    {categories.map(x => <option key={x} value={x}>{x}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='error-message' style={!isError ? { display: "none" } : null}>Please fill all the fields!</div>
                        <button className="button submit" type="submit" value="Update Sound">Update Sound</button>
                    </fieldset>
                </form>
                <button className="cancel-button" onClick={() => navigate('/my-sounds')}>Cancel</button>
            </section>
        </div>
    );
}

export default Edit;