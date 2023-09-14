function showDropZone(event)
{
	allowDrag(event);
}

function hideDropZone(event, force = false)
{

}

function allowDrag(event)
{
	event.preventDefault();
	event.dataTransfer.dropEffect = 'link';
}

function handleDrop(event)
{
	hideDropZone(event, true);

	if(event.dataTransfer.files && event.dataTransfer.files[0] && event.dataTransfer.files[0].path)
	{
		let body = document.querySelector('body');
		body.innerHTML += event.dataTransfer.files[0].path+'<br>';
	}
}

function start()
{
	window.addEventListener('dragenter', showDropZone);
	window.addEventListener('dragleave', hideDropZone);
	window.addEventListener('dragover', allowDrag);
	window.addEventListener('drop', handleDrop);
}

window.onload = function() {

	start();

}