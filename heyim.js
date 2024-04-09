const name = document.getElementById("name")
const tagscontainer = document.querySelector(".tags")

const addname = () => {
	if  (name.value === ""){
        alert('Please enter a Name')
		return null
	}
	const tag = document.createElement("div")
	tag.setAttribute("class","tag")
	tag.innerText = `Hey I am ${name.value}`
	tagscontainer.append(tag)
}