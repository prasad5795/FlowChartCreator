const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const canvasSchema = new Schema(
  {
    userId: {
      type: String,
    },
    canvasNodes: {
      type: Object,
    },
    canvasEdges: {
      type: Object,
    },
  },
  {
    collection: 'canvas',
  }
);
module.exports = mongoose.model('Canvas', canvasSchema);
