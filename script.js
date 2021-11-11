function createUsersTable() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
  }).then(
    (data) => {
      data.map((user) => {
        const row = $(`<tr>
        <td class="username" data-user-id="${user.id}">${user.username}</td>
      </tr>`);
        $("table").append(row);

        row.click(handleUserClick);
      });
    },
    (error) => {
      console.error("bad request", error);
    }
  );
}

function getUserPosts(userIdNum, name) {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
  }).then(
    (data) => {
      $(".user-posts").empty();
      $(".user-posts").append(`<h1 class="name">${name}'s Posts</h1>`);

      data.map((post) => {
        if (post.userId === userIdNum) {
          $(".user-posts").append(`<h2>${post.title}</h2><p>${post.body}</p>`);
        }
      });
    },
    (error) => {
      console.error("bad request", error);
    }
  );
}

function handleUserClick(event) {
  const id = $(event.target).data("user-id");
  const text = $(event.target).text();
  getUserPosts(id, text);
}

createUsersTable();
