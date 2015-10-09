function createRootUser() {
  db.users.insert({
    'id': 'rootUser',
    'local' : {
      'password' : '$2a$08$CjOoGRoCxrIzYL4VVQdnlubLNCPwlY.RrZ78L9RjgZvTTHYsWXHwe',
      'name' : 'Sven Hecht',
      'email' : 'sven.hecht@gmail.com'
    },
    'admin': true
  });
}

var query = { 'local.email':'sven.hecht@gmail.com' };
var result = db.users.find(query);

if (result.length() > 0) {
  db.users.remove(query);

  createRootUser();
} else {
  for (var i=0; i<20; i++) {

    createRootUser();

    db.courses.insert({
      name             : 'Course ' + i,
      description      : 'Monofilament math-girl apophenia nodal point geodesic Kowloon soul-delay. Faded tube nodal point paranoid into boat numinous BASE jump 3D-printed neural tank-traps bomb. Corporation tattoo dome towards motion dolphin bridge carbon drone.',
      state            : 'published',
      date             : '01.01.2015',
      doodle           : 'http://doodle.com/',
      participants     : [ ],
      teachers         : [ 'rootUser' ],
      infolink         : 'http://google.de/',
      imglink          : 'http://lorempixel.com/400/400/?v=' + i
    });
  }
}