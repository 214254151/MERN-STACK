import { useState } from "react"

const WorkoutForm = () =>{
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            // clearing form after success
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('New Workout Added', json)
        }
    }
        
    return(
        
        <form className="createForm" onSubmit={handleSubmit}>
            <img src="/pngtree-3d.png" alt="Workout" className="form-image" />
            <h3>Ad a new workout</h3>

            <laabel>Excersize Tile : </laabel>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <laabel>Load (in kg) : </laabel>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <laabel>Reps : </laabel>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm