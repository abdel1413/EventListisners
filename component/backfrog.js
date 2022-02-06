class backfrog {
  constructor(
    id,
    image,
    name,
    volume,
    color,
    pocketNum,
    lidOpend,
    strapLengthL,
    strapLengthR,
    dateAquired
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.lidOpend = lidOpend;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.dateAquired = dateAquired;
  }

  updateLid = (lidStatus) => {
    this.lidOpend = lidStatus;
  };

  updateStrap = (newLeft, newRight) => {
    this.strapLength.left = newLeft;
    this.strapLength.right = newRight;
  };

  backpackAge = () => {
    let now = new Date();
    let currentAge = new Date(this.dateAquired);
    let difference = now - currentAge;
    let conver = 1000 * 360 * 24;
    let date = Math.floor(difference / conver);
    return date;
  };
}

export default backfrog;
