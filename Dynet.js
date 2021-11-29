// Constants
const IN = 0;
const HIDDEN = 1;
const OUT = 2;

// Available activation functions
const SIGMOID = 0;
const TANH = 1;

function sigmoid(x) {
  return 1 / (1 + exp(-x));
}

// Clones an object
// Found from https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

// Represents a connection between layers
class Connection {
  constructor(layerFrom, layerTo, weight) {
    this.layerFrom = layerFrom;
    this.layerTo = layerTo;
    this.weight = weight;
  }
}

// Represents a single neuron
class Neuron {
  constructor() {
    this.connections = [];
    this.outGoing = 0;
    this.outGoingConnections = [];
    this.value = 0;
    this.bias = 0;
  }

  addConnection(layerFrom, indexFrom, weight) {
    this.connections.append(Connection(layerFrom, indexFrom, weight));
  }
}
