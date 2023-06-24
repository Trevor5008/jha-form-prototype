"use client"

export default function layout({ children }) {
   function handleSubmit(evt) {
      evt.preventDefault()
      console.log("submitted")
   }
   return (
      <main className="mx-4 sm:mx-8">
         <form onSubmit={handleSubmit}>
            {children}
         </form>
      </main>
   )
}
