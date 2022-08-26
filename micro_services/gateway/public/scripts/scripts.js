const addNewUser = async () => {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const user = {
      name: name,
      email: email,
      password: password
    };
    if (user.name === '' || user.email === '' || user.password === '') {
      alert('Введите корректные данные!');
      location.reload();
    } else {
      await fetch('/reg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(data => {
          if (data.code) {
            alert('Введите корректные данные!');
            location.reload();
          } else {
            alert('Регистрация прошла успешно!')}
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  const getTokenData = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = {
      email: email,
      password: password
    };
    if (user.email === '' || user.password === '') {
      alert('Введите корректные данные!');
      location.reload();
    } else {
    await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        if (data.code) {
          alert('Введите корректные данные!');
          location.reload();
        } else {
          alert('Вход успешный]!');
          localStorage.setItem('token', JSON.stringify(data));
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  const uploadImage = async () => {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    formData.append('image', fileField.files[0]);
    const token = localStorage.getItem('token');
    const string = token.split(':')[1].split('"')[1];
    try {
      await fetch('/image/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${string}`
        },
        body: formData
      });
      alert('Фото загружено!');
    } catch {
      console.error(error);
    }
    location.reload();
  }