import supabase from "../config/supabaseClient"
import { useEffect,useState } from "react"

const Home = () => {
  const[fetchError, setFetchError] = useState(null)
  const[Cars, setCars] = useState(null)

  useEffect(() => {
    const fetchCars = async () =>{
      const{ data, error} = await supabase
      .from(Cars)
      .select()

      if (error){
        setFetchError('could not fetch car')
        setCars(null)
        console.log(error)
      }
      if (data){
        setCars(data)
        setFetchError(null)
      }
    }

    fetchCars()
  }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}\
      {Cars && (
        <div className="Cars">
          {Cars.map(Cars => (
            <p>{Cars.title}</p>
          ))}
          </div>
      )}
    </div>
  )
}

export default Home