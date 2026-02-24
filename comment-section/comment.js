// A comment that can contain replies. Each reply can contain more replies. Like YouTube, Reddit, Hacker News, Medium.
// This involves
// – Dynamic creation of comments
// – Infinite nesting ( later )
// – Handling reply actions
// – Efficient event handling
// – DOM traversal
// – Show/Hide replies
// This is where event delegation shines, because adding a listener to every reply button in deeply nested structures will quickly become messy and slow.
// A comment should have:
// 1. The text
// 2. A Reply button
// 3. A Show/Hide button for replies
// 4. A replies container
// 5. Optionally a reply textarea A reply should live inside the replies section of the parent comment.

const textInputField = document.querySelector("#commentInput");
const commentSubmitBtn = document.querySelector("#submitComment");
const bodyComp = document.querySelector("body");
const commentsContainer = document.querySelector("#commentsContainer");

commentSubmitBtn.addEventListener("click", (event) => {
    if(!textInputField.value){
        return;
    }
    let textInputVal = textInputField.value.trim();
    let newCommentComp = document.createElement("div");
    newCommentComp.classList.add("comment");
    newCommentComp.innerHTML = `
        <p>${textInputVal}</p>
        <button class="replyBtn">Reply</button>
        <button class="toggleReplies">Show/Hide Replies</button>
        <div class="repliesContainer collapsed"></div>
        <textarea
            id="replyInput"
            class="replyInput"
            placeholder="Write a reply..."
        ></textarea>
    `;
    commentsContainer.appendChild(newCommentComp);
    textInputField.value = "";
});

commentsContainer.addEventListener("click", (event) => {
    console.log(event.target);
    const target = event.target;
    if(!target.classList.contains("replyBtn") && !target.classList.contains("toggleReplies")){
        return;
    }

    const currentCommentComp = target.parentNode;
    const replyCnt = currentCommentComp.querySelector(".repliesContainer");
    if(target.classList.contains("replyBtn")){
        const textAreaCmp = currentCommentComp.querySelector("#replyInput");
        if(!textAreaCmp.value){
            return;
        }
        replyCnt.classList.remove("collapsed");
        let textareaVal = textAreaCmp.value.trim();
        let replyCmp = document.createElement("div");
        replyCmp.classList.add("reply");
        // replyCmp.innerHTML = `
        //     <p>${textareaVal}</p>
        // `;
        replyCmp.innerHTML = `
            <p>${textareaVal}</p>
            <button class="replyBtn">Reply</button>
            <button class="toggleReplies">Show/Hide Replies</button>
            <div class="repliesContainer collapsed"></div>
            <textarea
                id="replyInput"
                class="replyInput"
                placeholder="Write a reply..."
            ></textarea>
        `;
        replyCnt.appendChild(replyCmp);
        textAreaCmp.value = "";
    }

    if(target.classList.contains("toggleReplies") && replyCnt.innerHTML!=''){
        if(replyCnt.classList.contains("collapsed")){
            replyCnt.classList.remove("collapsed");
        }else{
            replyCnt.classList.add("collapsed");
        }
    }
})
