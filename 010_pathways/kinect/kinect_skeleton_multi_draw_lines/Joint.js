// Joint object
class Joint {
  let id;
  let pos, ppos;
  let speed, pspeed;
  let acceleration;


  // Create joint with id and position data
  constructor(id, joint) {
    id = id;
    pos = createVector(joint.cameraX, joint.cameraY, joint.cameraZ);
    ppos = pos.copy();
    speed = 0;
    pspeed = 0;
    acceleration = 0;
  }

  // Update joint position, speed and acceleration data
  update(joint) {

    // Store current values as previous values
    ppos = pos.copy();
    pspeed = speed;

    // Update joint with new values for pos, speed and acceleration
    pos = createVector(joint.cameraX, joint.cameraY, joint.cameraZ);
    speed = p5.Vector.dist(pos, ppos);
    acceleration = abs(speed - pspeed);
  }

  getPosition() {
    return pos;
  }

  getSpeed(){
    return speed;
  }

  getAcceleration(){
    return acceleration;
  }
}