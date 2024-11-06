const ENDPOINT = 'https://catfact.ninja/fact'

export const getInfo = async () => {
  const response = await fetch(ENDPOINT)
  const data = await response.json()
  const { fact } = data
  return fact
}
