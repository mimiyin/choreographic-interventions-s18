// Object for managing bodies
// Adds, updates and removes, maintains pop count
class BodyManager {
  let pop = 0; // How many bodies?
  let bodies = {}; // Bodies indexed by id

  constructor() {
    // Set recurring task to remove dead bodies every half second
    setInterval(function () {
      let ts = Date.now();
      for (let id in bodies) {
        let body = bodies[id];
        if (body.isDead()) {
          delete bodies[id];
          pop--;
        }
      }, 500);
  }

  // Check to see if body already exists
  contains(id) {
      return id in bodies;
    }
    // Add new body
  add(body) {
      let id = body.trackingId;
      bodies[id] = new Body(body);
      pop++;
    }
    // Update data for existing body
  update(body) {
    let id = body.trackingId;
    bodies[id].update(body);
  }

  // Returns array of body objects
  getBodies() {
    let arrayOfBodies = [];
    for (id in bodies) {
      arrayOfBodies.push(bodies[id]);
    }
    return arrayOfBodies;
  }

  // Returns array of joint objects
  // for the specified joint
  // Includes pos, speed and acceleration for each joint
  getJoints(joint) {
      let joints = [];
      for (id in bodies) {
        let body = bodies[id];
        joints.push(body.getJoint(joint));
      }
      return joints;
    }
    // Returns an array of position vector
    // for the specified joint
  getPositions(joint) {
    let positions = [];
    for (id in bodies) {
      let body = bodies[id];
      positions.push(body.getPosition(joint));
    }
    return positions;
  }

  // Returns current population of bodies
  getPop() {
    return pop;
  }
};