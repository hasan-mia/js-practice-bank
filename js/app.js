// Add and Delete Iteam Dynamic

document.getElementById('post-btn').addEventListener('click', function(e) {
    const postTitleId = document.getElementById('post-title');
    const postTitle = postTitleId.value;
    const postDescriptionId = document.getElementById('post-description');
    const postDescription = postDescriptionId.value;
    postTitleId.value = '';
    postDescriptionId.value = '';
    const postListContainer = document.getElementById('post-container');
    const creatPostList = document.createElement('article');
    creatPostList.innerHTML = (`
    <a href="#" class="text-2xl"><h1 class="font-semibold">${postTitle}</h1></a>
    <p class="text-justify text-lg">${postDescription}</p>
    `);
    postListContainer.appendChild(creatPostList);
    // Desable Delete Button
    if (e.target.id == 'post-btn') {
        document.getElementById('post-delete').removeAttribute('disabled', false);
    } else {
        document.getElementById('post-delete').removeAttribute('disabled', true);
    }

});
// Clear All  Post
document.getElementById('post-delete').addEventListener('click', function(e) {
    if (e.target.id == 'post-delete') {
        document.getElementById('post-container').style.display = 'none';
    }
});

// =============Cont Number==============
function countControl(params) {
    countNumberId = document.getElementById('count-number');
    if (params == 'add-count-btn' && countNumberId.value < 5) {
        countNumberId.value++
            if (countNumberId.value >= 5) {
                document.getElementById('add-count-btn').setAttribute('disabled', 'disabled');
            }
    } else if (params == 'sub-count-btn' && countNumberId.value != 0) {
        countNumberId.value--;
        document.getElementById('add-count-btn').removeAttribute('disabled');

    }
}

document.getElementById('add-count-btn').addEventListener('click', function() {
    countControl('add-count-btn')
})
document.getElementById('sub-count-btn').addEventListener('click', function() {
    countControl('sub-count-btn')
})