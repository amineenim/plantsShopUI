import { useState } from 'react'
function QuestionForm()
{
	const [inputValue,setInputValue] = useState('posez votre question !')
	return(
		<div>
		<textarea 
		value = {inputValue}
		onChange = {(e) => setInputValue(e.target.value)}
		/>
		</div>
		)
}
export default QuestionForm

