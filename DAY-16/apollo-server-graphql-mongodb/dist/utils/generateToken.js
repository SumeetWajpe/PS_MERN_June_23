export const generateToken = (uname) => {
    let payload = { name: uname, lastLogin: "Monday 25th" };
    jwt.sign(payload, SECRET_KEY, { expiresIn: "2 Days" }, (err, token) => {
        if (err)
            console.log(err);
        else
            return res.json({ token });
    });
};
