import { useEffect } from "react"

export const WordList = () => {
useEffect(() => {
fetch('/words').then(response => response.json()).then(data => console.log("data:", data))}, []) 
}