let oddNumber = document.querySelector(".oddNumbers"),
    evenNumber = document.querySelector(".evenNumbers"),
    allUniqueNumbers = document.querySelector(".uniqueNumbers"),
    sortingNumbers = document.querySelector(".sortingNumbers"),
    numberInput = document.querySelector(".numberInput"),
    numberCheckBtn = document.querySelector(".numberCheckBtn"),
    numberError = document.querySelector(".numberError"),
    numberArr = [];
    // numberArr = [1,2,3,33,11,22,4,5,6,9,8,7,99,66];


numberCheckBtn.addEventListener("click", () => {
    if (numberInput.value - 9999999999999999999999) {
        numberError.style.display = "none";
        numberArr.push(numberInput.value)
        numberInput.value = "";
    } else {
        numberError.style.display = "block";
        numberError.innerHTML = "Enter a valid number";
        numberInput.value = "";
    }

    oddEven();
    uniqueNumbers();
    sortednumbers()
});

// ===========================================
// even odd number sorting
// ===========================================
function oddEven() {
    let odd = []
    let even = []
    oddNumber.innerHTML = ""
    evenNumber.innerHTML = ""
    numberArr.map((number) => {
        if (number % 2 == 0) {
            even.push(number);
        }
        else {
            odd.push(number);
        }
    });

    oddNumber.innerHTML += `Odd Numbers => ${odd}`
    evenNumber.innerHTML += `Even Numbers => ${even}`
}
// ===========================================
// Duplicate Number sorting and remove;
// ===========================================
function uniqueNumbers() {
    let uniqueNumbers = []
    numberArr.map((number, index) => {
        if (uniqueNumbers.indexOf(numberArr[index]) === -1) {
            uniqueNumbers.push(numberArr[index]);
        }
    });
    allUniqueNumbers.innerHTML = `Unique Numbers => ${uniqueNumbers}`
}


// ===========================================
// Number sorting without sort method;
// ===========================================
let sortNumberArr = [1,25,4,15,78,36,25,98,998,75123,2,6,9,8,3,56586]
    sortNumberArr.map((number1, index1) => {
        sortNumberArr.map((number2, index2) => {
            if (sortNumberArr[index1] < sortNumberArr[index2]) {
                temp = sortNumberArr[index1];
                sortNumberArr[index1] = sortNumberArr[index2];
                sortNumberArr[index2] = temp;
            }
        });
    });
    sortingNumbers.innerHTML = `Sorted Numbers => ${sortNumberArr}`
    




// =========================================================================================================================
// posting
// =========================================================================================================================

let newPostInput = document.querySelector(".newPostInput");
let nameInput = document.querySelector(".nameInput");
let postInput = document.querySelector(".postInput");
let postButton = document.querySelector(".postButton");
let inputError = document.querySelector(".inputError");

let editInput = document.querySelector(".editShadow");
let nameEdit = document.querySelector(".nameEdit");
let postEdit = document.querySelector(".postEdit");
let editButton = document.querySelector(".editButton");
let editId = document.querySelector("#editid");
let editError = document.querySelector(".editError");

let allPost = document.querySelector(".allPost");
let postArr = []


postButton.addEventListener("click", function () {
    if (nameInput.value - 11) {
        inputError.style.display = "block";
        inputError.innerHTML = "Please enter valid name";
    } else {
        inputError.style.display = "none";
        postArr.push({ name: nameInput.value, post: postInput.value })
        addPost()
    }
});


function addPost() {
    nameInput.value = ""
    postInput.value = ""
    allPost.innerHTML = ""
    allPost.style.display = "block"
    postArr.map((item) => {
        allPost.innerHTML += `<li class="post">
                                <div class="heading">
                                    <img src="./user.png" alt=""/>
                                    <h5>${item.name}</h5>
                                </div>
                                <p>${item.post}</p>
                                <div class="actions btn-group">
                                <button class="editBtn btn btn-primary"><i class="uil uil-pen"></i>Edit</button>
                                <button class="removeBtn btn btn-danger"><i class="uil uil-trash"></i>Delete</button>
                                <button class="shareBtn btn btn-secondary"><i class="uil uil-share"></i>Share</button>
                                </div>
                            </li>`;
    });

    let removeBtns = document.querySelectorAll(".removeBtn");
    let removeBtnArr = Array.from(removeBtns)

    removeBtnArr.map((removeBtn, index) => {
        removeBtn.addEventListener("click", function () {
            postArr.splice(index, 1);
            addPost();
        });
    });

    let editBtns = document.querySelectorAll(".editBtn");
    let editBtnArr = Array.from(editBtns);

    editBtnArr.map((editbtn, index) => {
        editbtn.addEventListener("click", function () {
            editInput.style.transform = "scale(1)";
            nameEdit.value = postArr[index].name;
            postEdit.value = postArr[index].post;
            console.log(postArr[index])
            editId.value = index;
            console.log(editId.value)
            editButton.addEventListener("click", function () {
                if (nameEdit.value - 11) {
                    editError.innerHTML = "Please enter valid name";
                    editError.style.display = "block";
                    console.log("Please enter valid name")
                } else {
                    editError.style.display = "none";
                    console.log("valid name");
                    if (editId.value == index) {
                        postArr[index].name = nameEdit.value;
                        postArr[index].post = postEdit.value;
                        addPost();
                    }
                    editInput.style.transform = "scale(0)";
                }
            });
        });
    });


    let shareBtns = document.querySelectorAll(".shareBtn");
    let shareBtnArr = Array.from(shareBtns);

    shareBtnArr.map((shareBtn, index) => {
        shareBtn.addEventListener("click", function () {
            postArr.unshift({ name: postArr[index].name, post: postArr[index].post });
            addPost();
        });
    });

    console.log(postArr)
};
