import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"
import SmoothieCard from "../Components/SmoothieCard";

const Home = () => {
const [fetchError, setFetchError] = useState(null);
const [ smoothies, setSmoothies ] = useState(null);
  
useEffect(() => {
const fetchSmoothies = async () => {

  const { data, error } = await supabase
    .from("smoothies")
    .select()

  if (error) {  
    setFetchError("could not fetch smoothies")
   console.log(error)
   setSmoothies(null)
  }

  if (data) {
    setSmoothies(data)
    setFetchError(null)
  }
}
fetchSmoothies();
}, [])


  return (
    <div className="page home">
     {fetchError && <p>{fetchError}</p>}
{smoothies && (
  <div className="smoothies">
  {/*order-by buttons*/ }
<div className="smoothie-grid">
{smoothies.map(smoothie => (
  <div>
  <SmoothieCard key= {smoothie.id} smoothie={smoothie} />
  
  </div>
))}
</div>

    </div>
    )}
    </div>
    )
  
}

export default Home