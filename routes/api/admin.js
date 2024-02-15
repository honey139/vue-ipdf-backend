const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../../config/jwtSecret");
const os = require("os");
const fs = require("fs");
const si = require("systeminformation");

const auth = require("../../middleware/auth");
const Clients = require("../../models/Clients");

// @route    POST api/admin/client
// @desc     save client info
// @access   Public
router.post("/client", async (req, res) => {
  //Retrieve the info from post request
  console.log(req.body);
  const { ip, browser, downUrl, workUrl, file } = req.body;

  try {
    let clients = await Clients.findOne({ file });

    if (clients) {
      return res
        .status(400)
        .json({ errors: [{ msg: "client already exists" }] });
    }
    clients = new Clients({
      ip,
      browser,
      downUrl,
      workUrl,
      file,
    });

    await clients.save();

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Invalid Email Address" }] });
    }

    if (!user.isAdmin) {
      return res.status(400).json({ errors: [{ msg: "Invalid Admin" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Password" }] });
    }

    const payload = {
      user: {
        id: user.id,
        isAdmin: user.isAdmin,
      },
    };
    jwt.sign(payload, jwtSecret, { expiresIn: "1 days" }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.get("/liveviews", auth, async (req, res) => {
  user = req.user;
  if (!user.isAdmin) {
    return res.status(400).json({ errors: [{ msg: "Invalid Admin" }] });
  }

  await Clients.find(
    {},
    "ip browser workUrl timestamp",
    function (err, clients) {
      if (err) {
        res.status(400).json({ error: [{ msg: "Server Error" }] });
        // Handle error
      } else {
        // Handle clients data
        res.json({ data: clients });
      }
    }
  );
});
router.get("/files", auth, async (req, res) => {
  user = req.user;
  if (!user.isAdmin) {
    return res.status(400).json({ errors: [{ msg: "Invalid Admin" }] });
  }

  await Clients.find(
    {},
    "downUrl deleted workUrl ip timestamp",
    function (err, clients) {
      if (err) {
        res.status(400).json({ error: [{ msg: "Server Error" }] });
        // Handle error
      } else {
        // Handle clients data
        res.json({ data: clients });
      }
    }
  );
});

router.get("/serverstatus", auth, async (req, res) => {
  user = req.user;
  if (!user.isAdmin) {
    return res.status(400).json({ errors: [{ msg: "Invalid Admin" }] });
  }

  const cpus = os.cpus();
  const totalCores = cpus.length;
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();

  console.log(`Total Memory: ${totalMemory}`);
  console.log(`Free Memory: ${freeMemory}`);

  si.networkStats()
    .then((data) => {
      console.log("Network Interface Stats:", data);
    })
    .catch((error) => {
      console.error("Error retrieving network stats:", error);
    });

  fs.stat("/", function (err, stats) {
    if (err) {
      console.error(err);
      return;
    }

    // Output total size and usage size
    const totalSizeGB = (stats.blocks * stats.blksize) / (1024 * 1024 * 1024);
    const usedSizeGB =
      stats.blocks * stats.blksize -
      (stats.blocks * stats.blksize * stats.blocks * stats.blksize) /
        (1024 * 1024 * 1024);

    console.log("Total Size:", totalSizeGB, "GB");
    console.log("Used Size:", usedSizeGB, "GB");
  });

  res.json({ data: "success" });
});

module.exports = router;
