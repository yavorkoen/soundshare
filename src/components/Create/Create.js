import './Create.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext.js';
import * as crudService from '../../services/crudService.js';

const Create = () => {
    let navigate = useNavigate();
    let { user } = useContext(AuthContext);
    console.log(user.accessToken);

    const onCreateHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        const obj = Object.fromEntries(formData);
        console.log(obj);



        crudService.create(user.accessToken, obj)
            .then(res => {
                console.log(res);
                navigate('/my-sounds');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="create-container">
            <div className="create-bcgr"></div>
            <section id="create-page" className="create">
                <form id="create-form" method="POST" onSubmit={onCreateHandler}>
                    <fieldset>
                        <legend>Add new sound</legend>
                        <div className="field">
                            <label htmlFor="name">Name your sound</label>
                            <div className="input">
                                <input type="text" name="title" id="title" placeholder="Sound name" />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="name">Author's Name</label>
                            <div className="input">
                                <input type="text" name="authorName" id="authorName" placeholder="Your name" />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="description">Description</label>
                            <div className="input">
                                <textarea name="description" id="description" rows="6" cols="60" placeholder="Up to 200 characters" maxLength="200"></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="soundUrl">Copy Soundcloud or Youtube link</label>
                            <div className="input">
                                <input type="text" name="soundUrl" id="soundUrl" placeholder="URL" />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="category">Category</label>
                            <div className="input">
                                <select id="category" name="category">
                                    <option value="Prophet rev2">Prophet rev2</option>
                                    <option value="Korg microkorg">Korg microkorg</option>
                                    <option value="Arturia">Arturia</option>
                                </select>
                            </div>
                        </div>
                        <input className="button submit" type="submit" value="Add Sound" />
                    </fieldset>
                </form>
            </section>
        </div>
    );
}


export default Create;