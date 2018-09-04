const coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random());
        console.log(this.state);
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
    },
    toString: function() {
        if (this.state === 0) {
            return "Heads";
        } else {
            return "Tails";
        }
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
    },
    toHTML: function() {
        const image = document.createElement('img');

        if (this.state === 0) {
            image.src = "images/quarter-heads.png";
        } else {
            image.src = "images/quarter-tails.png";
        }
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        return image;
    }
};

function coinFlip() {
    for (let i = 1; i <= 20; i++) {
        coin.flip();
        let result = document.createElement("div");
        result.textContent = coin.toString();
        document.body.appendChild(result);
        document.body.appendChild(coin.toHTML())
    }
}

coinFlip();