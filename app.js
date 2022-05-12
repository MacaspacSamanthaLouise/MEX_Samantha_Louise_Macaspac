window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");

	let editItem = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Submit") {
		console.log("Hello");

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Submit";
		document.getElementById("item").value = "";

		document.getElementById("lblsuccess").innerHTML = "Text edited successfully";

		document.getElementById("lblsuccess") .style.display = "block";

		setTimeout(function() { 
            document.getElementById("lblsuccess") .style.display = "none";}, 3000);
        return false;
	    }

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");
	li.className = "list-group-item";

	let removeButton = document.createElement("button");

	removeButton.className =
		"btn-danger btn btn-sm float-right remove";

	removeButton.appendChild(document.createTextNode("Remove"));

	let doneButton = document.createElement("button");

	doneButton.className =
			"btn-success btn btn-sm float-right done";

	doneButton.appendChild(document.createTextNode("Done"));

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(removeButton);
	li.appendChild(doneButton);

	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("remove")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML = "Text deleted successfully";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";}, 3000);
		}
	}
	if (e.target.classList.contains("done")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "DONE";
		doneItem = e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}
