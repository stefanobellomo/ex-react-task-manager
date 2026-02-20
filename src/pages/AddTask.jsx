import { useState, useRef } from "react";

export default function AddTask() {

    const [title, setTitle] = useState("")
    const descriptionRef = useRef("")
    const statusRef = useRef("To do")

    const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";


    function handleSubmit(e) {
        e.preventDefault()

        const description = descriptionRef.current.value
        const status = statusRef.current.value

        if (titleValidation || description === "") {
            console.log("compila tutti i campi");
        } else {
            console.log(`titolo task: ${title} 
                descrizione task: ${description} 
                stato: ${status}`)
        }
    }

    const titleValidation = title.trim() === "" || [...title].some(ch => symbols.includes(ch))

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Task name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />
                        <span style={{ color: titleValidation ? "red" : "green" }}>{!titleValidation ? "task valida" : "caratteri speciali e campo vuoto non ammessi"}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description task</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            ref={descriptionRef}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Status</label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            ref={statusRef}>
                            <option>To do</option>
                            <option>Doing</option>
                            <option>Done</option>
                        </select>
                    </div>
                    <button type="submit">Send form</button>
                </form>
            </div>
        </>
    )
}