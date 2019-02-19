// File Name: getFaqQuestionClassName.js
// Desc: Returns any className that includes 'question'
// ---

const getClassList = classList => classList.split(" ").filter(item => item.includes("question"))[0]

export default getClassList
