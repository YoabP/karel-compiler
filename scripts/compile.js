var world = {
    "rows": 14,
    "cols": 16,
    "karel": [{
        "x": 1,
        "y": 1,
        "beepers": 1000000,
        "orientationIndex": 1,
        "orientation": {
            x: 1,
            y: 0
        }
    },
    {
        "x": 1,
        "y": 5,
        "beepers": 2,
        "orientationIndex": 1,
        "orientation": {
            x: 1,
            y: 0
        }
    },
    {
        "x": 2,
        "y": 5,
        "beepers": 2,
        "orientationIndex": 1,
        "orientation": {
            x: 1,
            y: 0
        }
    },
    {
        "x": 1,
        "y": 6,
        "beepers": 2,
        "orientationIndex": 1,
        "orientation": {
            x: 1,
            y: 0
        }
    },
    {
        "x": 4,
        "y": 6,
        "beepers": 2,
        "orientationIndex": 1,
        "orientation": {
            x: 1,
            y: 0
        }
    },
    {
        "x": 7,
        "y": 7,
        "beepers": 2,
        "orientationIndex": 1,
        "orientation": {
            x: 1,
            y: 0
        }
    },
    {
        "x": 8,
        "y": 7,
        "beepers": 2,
        "orientationIndex": 1,
        "orientation": {
            x: 1,
            y: 0
        }
    }],
    // "grid": [
    //     [{"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}],
    //     [{"w": true, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": true, "b": 0}, {"w": false, "b": 1}, {"w": true, "b": 0}],
    //     [{"w": true, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}],
    //     [{"w": true, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": true, "b": 0}],
    //     [{"w": true, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": true, "b": 0}],
    //     [{"w": true, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": true, "b": 0}],
    //     [{"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}],
    //     [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
    //     [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
    //     [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
    //     [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
    //     [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
    //     [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
    //     [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
    //     [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
    //     [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}]
    // ]
    "grid": [
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": true, "b": 0}, {"w": false, "b": 2}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 1}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}],
        [{"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}, {"w": false, "b": 0}]
    ]
};

// Add walls to world
for (var i = 1; i < world.rows - 1; i++) {
    world.grid[i][0].w = world.grid[i][world.cols - 1].w = true;
}

for (var i = 0; i < world.cols; i++) {
    world.grid[0][i].w = world.grid[world.rows - 1][i].w = true;
}

canvas.init(function () {
    canvas.drawWorld(world, world.karel);
});

var reset = function() {
    canvas.reset(world, world.karel);
};

var compile = function(editor) {
    var program = editor.getSession().getValue();
    var tokens = lexicographic.getTokens(program);
    var intercode = syntax.parse(tokens);

    localStorage.setItem('karelProgram', program);

    evaluator.evaluate(
        intercode,
        world
    );
};