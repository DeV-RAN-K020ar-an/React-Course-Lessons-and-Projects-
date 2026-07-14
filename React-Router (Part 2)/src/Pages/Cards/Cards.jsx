import Card from "./Card"

const Cards = () => {
  
  return (
    <main className="h-screen bg-slate-900 flex items-center justify-center gap-4 ">
      <Card id={1} flag={'/ar.png'} name={'Argentina'} stars='⭐⭐⭐⭐⭐' /* color={'bg-cyan-800/70'} */ />
      <Card id={2} flag={'/de.png'} name={'Germany'} stars='⭐⭐⭐⭐' /* color={'bg-red-800'} */ />
      <Card id={3} flag={'/fr.png'} name={'France'} stars='⭐⭐⭐' /* color={'bg-amber-500'} */ />
      <Card id={4} flag={'/pt.png'} name={'Portugal'} stars='⭐⭐' /* color={'bg-green-800'} */ />
    </main>
  )
}

export default Cards