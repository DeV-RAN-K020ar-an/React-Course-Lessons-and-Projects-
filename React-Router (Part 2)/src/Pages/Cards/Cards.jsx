import Card from "./Card"

const Cards = () => {
  return (
    <main className="h-screen bg-slate-900 flex items-center justify-center gap-4">
      <Card flag={'/ar.png'} name={'Argentina'} stars='⭐⭐⭐⭐⭐' /* color={'bg-cyan-800/70'} */ />
      <Card flag={'/de.png'} name={'Germany'} stars='⭐⭐⭐⭐' /* color={'bg-red-800'} */ />
      <Card flag={'/es.png'} name={'Spain'} stars='⭐⭐⭐' /* color={'bg-amber-500'} */ />
      <Card flag={'/pt.png'} name={'Portugal'} stars='⭐⭐' /* color={'bg-green-800'} */ />
    </main>
  )
}

export default Cards