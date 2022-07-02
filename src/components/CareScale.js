

function CareScale({scaleValue,careType}){
	const range      = [1,2,3]
	const scaleType  = careType ==='light' ? '☀️' : '💧'
	const quantityLabel = {
		1 :"peu",
		2 :"modérement",
		3 : "beaucoup"
	}
	const result = careType ==='light' ? "d'ensoleillement" : "d'arrosage"

	return (
		<div 
		onClick={() =>
	    alert('cette plante requiert '+ quantityLabel[scaleValue] +' '+result)}>
		{range.map((rangeElmnt) => (scaleValue >= rangeElmnt ? 
			<span key={rangeElmnt.toString()}>{scaleType}</span> : null))
		}
		</div>
		)
}
export default CareScale
