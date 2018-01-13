// Body object
class Body {

  // Local functio for creating Joint objects
  let createJoints = function (body) {
    let joints = [];
    for (let j = 0; j < body.joints.length; j++) {
      joints[j] = new Joint(j, body.joints[j]);
    }
    return joints;
  }

  let joints;
  let ts;

  constructor(body) {
    // Create body with id, joints and ts.
    this.id = body.trackingId;
    joints = createJoints(body);
    ts = Date.now();
  }

  // Update body joint and ts data
  update(body) {
    for (let j = 0; j < body.joints.length; j++) {
      joints[j].update(body.joints[j]);
      ts = Date.now();
    }
  }

  // Returns joint object for specified joint
  getJoints() {
    return joints;
  }

  // Returns joint object for specified joint
  getJoint(joint) {
    return joints[joint];
  }

  // Returns position vector for specified joint
  getPos(joint) {
    //console.log(this.joints[joint].pos);
    return joints[joint].getPos();
  }

  // Check to see if body has been updated in last 5 seconds
  isDead() {
    return Date.now() - ts > DEATH_TH
  }
}