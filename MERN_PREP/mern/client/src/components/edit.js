import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router';

export default function Edit() {
    const [form, setForm] = useState({
        name: "",
        position: "",
        level: "",
        records: [],
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`http://localhost:5000/record/${id}`); // this line might need to be fixed

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const record = await response.json();
            if (!record) {
                window.alert(`No record found with id: ${id}`);
                navigate("/");
                return;
            }

            setForm(record);
        }

        fetchData();

        return;
    }, [params.id, navigate]);

    // methods for updating state properties
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // method for submitting form
    async function onSubmit(e) {
        e.preventDefault();
        const editedPerson = {
            name: form.name,
            position: form.position,
            level: form.level,
        };

        // send a post to update teh database
        await fetch(`http://localhost:5000/update/${params.id}`, {
            method: "POST",
            body: JSON.stringify(editedPerson),
            headers: {
                "Content-Type": "application/json",
            },
        });

        navigate("/");
    }

    // render the form
    return (
        <div>
            <h3>Update Record</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        placeholder="Enter position"
                        value={form.position}
                        onChange={(e) => updateForm({ position: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionIntern"
                            value="intern"
                            checked={form.level === "intern"}
                            onChange={(e) => updateForm({ level: e.target.value })}
                        />
                        <label className="form-check-label" htmlFor="positionIntern">Intern</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionJunior"
                            value="junior"
                            checked={form.level === "junior"}
                            onChange={(e) => updateForm({ level: e.target.value })}
                        />
                        <label className="form-check-label" htmlFor="positionJunior">Junior</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionSenior"
                            value="senior"
                            checked={form.level === "senior"}
                            onChange={(e) => updateForm({ level: e.target.value })}
                        />
                        <label className="form-check-label" htmlFor="positionSenior">Senior</label>
                    </div>
                </div>
                <br />

                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Record"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}