export async function retrieveData() {
  try {
      let response = await fetch("/data-profils/data-photographers.json")
      if (!response.ok) {
          throw new Error("quelque chose a planté ")
      }
      return response.json()
  } catch (e) {
      throw new Error(e)
  }
}