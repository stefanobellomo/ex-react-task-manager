import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";

export default function EditTaskModal({ show, onClose, task, onSave }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("To do");

    const formRef = useRef(null);

    useEffect(() => {
        if (!show || !task) return

        setTitle(task.title)
        setDescription(task.description)
        setStatus(task.status)
    }, [task, show])

    function handleSubmit(e) {
        e.preventDefault()

        onSave({
            ...task,
            title: title.trim(),
            description: description.trim(),
            status
        })
    }

    return (
        <Modal
            show={show}
            onClose={onClose}
            title="Modifica Task"
            confirmText="Salva"
            onConfirm={() => formRef.current?.requestSubmit()}
            content={
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Titolo</label>
                        <input
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                        />
                    </div>

                    <div className="form-group">
                        <label>Descrizione</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select
                            className="form-control"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option>To do</option>
                            <option>Doing</option>
                            <option>Done</option>
                        </select>
                    </div>
                </form>
            }
        />
    );
}