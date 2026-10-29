// MongoDB Aggregation Practice
// Topic: $match, $group, $sum, $avg, $sort

// Example 1: Find completed tasks

db.tasks.aggregate([
  {
    $match: {
      status: "completed",
    },
  },
]);

// Example 2: Count completed tasks per employee

db.tasks.aggregate([
  {
    $match: {
      status: "completed",
    },
  },
  {
    $group: {
      _id: "$employee",
      totalTasks: {
        $sum: 1,
      },
    },
  },
]);

// Example 3: Calculate total working hours per employee

db.tasks.aggregate([
  {
    $match: {
      status: "completed",
    },
  },
  {
    $group: {
      _id: "$employee",
      totalHours: {
        $sum: "$hours",
      },
    },
  },
]);

// Example 4: Calculate average working hours per employee

db.tasks.aggregate([
  {
    $match: {
      status: "completed",
    },
  },
  {
    $group: {
      _id: "$employee",
      averageHours: {
        $avg: "$hours",
      },
    },
  },
]);

// Example 5: Find employees with at least two completed tasks
// Sort by total completed tasks, highest first

db.tasks.aggregate([
  {
    $match: {
      status: "completed",
    },
  },
  {
    $group: {
      _id: "$employee",
      totalTasks: {
        $sum: 1,
      },
    },
  },
  {
    $match: {
      totalTasks: {
        $gte: 2,
      },
    },
  },
  {
    $sort: {
      totalTasks: -1,
    },
  },
]);
