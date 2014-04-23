window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback, element) {
      callback();
    };
})();

var App = App || {};
App = {
  'loaded': false,
  'host': window.location.origin + "/assets/emoji/",
  'canvas': document.getElementById('canvas'),
  'ctx': this.canvas.getContext('2d'),
  'images': [],
  'preload': function(url){
    // preload each image
    var img = new Image();
    img.onload = function(){
      App.images.push(img);
    }
    img.src = this.host + url;
  },
  'wait': function(){
    // poll for readystate
    var waiting = setInterval(function(){
      if (!App.loaded) return;
      App.scrubEmojis();
      clearInterval(waiting);
    }, 100);
  },
  'init': function(){
    // set timer to wait for images to load
    this.wait();

    // sort the images by filename
    this.filenames = this.filenames.sort(function(a,b){
      return a.split('.')[0] - b.split('.')[0];
    });

    // preload each image
    for (var i = 0, len = App.filenames.length; i < len; i++) {
      App.preload(App.filenames[i]);
    }

    // set loaded to true
    this.loaded = true;

    // set canvas width and height to window width and height
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

  },
  'scrubEmojis': function() {
    var index = 0, fps = 9;

    window.setInterval(function() {
      window.requestAnimFrame(render);
    }, 1000 / fps);

    var render = function() {
      // clear canvas & deal with resizing
      App.canvas.width = window.innerWidth;
      App.canvas.height = window.innerHeight;

      // draw the image
      App.ctx.drawImage(App.images[index],
                        ~~(0.5 + parseInt(App.canvas.width / 2 - App.images[index].width / 2)),
                        ~~(0.5 + parseInt(App.canvas.height / 2 - App.images[index].height / 2)));

      // increment and/or reset index
      index++;
      if (!App.images[index]) index = 0;
    }

  },
  'filenames': "1.png 10.png 100.png 101.png 102.png 103.png 104.png 105.png 106.png 107.png 108.png 109.png 11.png 110.png 111.png 112.png 113.png 114.png 115.png 116.png 117.png 118.png 119.png 12.png 120.png 121.png 122.png 123.png 124.png 125.png 126.png 127.png 128.png 129.png 13.png 130.png 131.png 132.png 133.png 134.png 135.png 136.png 137.png 138.png 139.png 14.png 140.png 141.png 142.png 143.png 144.png 145.png 146.png 147.png 148.png 149.png 15.png 150.png 151.png 152.png 153.png 154.png 155.png 156.png 157.png 158.png 159.png 16.png 160.png 161.png 162.png 163.png 164.png 165.png 166.png 167.png 168.png 169.png 17.png 170.png 171.png 172.png 173.png 174.png 175.png 176.png 177.png 178.png 179.png 18.png 180.png 181.png 182.png 183.png 184.png 185.png 186.png 187.png 188.png 189.png 19.png 190.png 191.png 192.png 193.png 194.png 195.png 196.png 197.png 198.png 199.png 2.png 20.png 200.png 201.png 202.png 203.png 204.png 205.png 206.png 207.png 208.png 209.png 21.png 210.png 211.png 212.png 213.png 214.png 215.png 216.png 217.png 218.png 219.png 22.png 220.png 221.png 222.png 223.png 224.png 225.png 226.png 227.png 228.png 229.png 23.png 230.png 231.png 232.png 233.png 234.png 235.png 236.png 237.png 238.png 239.png 24.png 240.png 241.png 242.png 243.png 244.png 245.png 246.png 247.png 248.png 249.png 25.png 250.png 251.png 252.png 253.png 254.png 255.png 256.png 257.png 258.png 259.png 26.png 260.png 261.png 262.png 263.png 264.png 265.png 266.png 267.png 268.png 269.png 27.png 270.png 271.png 272.png 273.png 274.png 275.png 276.png 277.png 278.png 279.png 28.png 280.png 281.png 282.png 283.png 284.png 285.png 286.png 287.png 288.png 289.png 29.png 290.png 291.png 292.png 293.png 294.png 295.png 296.png 297.png 298.png 299.png 3.png 30.png 300.png 301.png 302.png 303.png 304.png 305.png 306.png 307.png 308.png 309.png 31.png 310.png 311.png 312.png 313.png 314.png 315.png 316.png 317.png 318.png 319.png 32.png 320.png 321.png 322.png 323.png 324.png 325.png 326.png 327.png 328.png 329.png 33.png 330.png 331.png 332.png 333.png 334.png 335.png 336.png 337.png 338.png 339.png 34.png 340.png 341.png 342.png 343.png 344.png 345.png 346.png 347.png 348.png 349.png 35.png 350.png 351.png 352.png 353.png 354.png 355.png 356.png 357.png 358.png 359.png 36.png 360.png 361.png 362.png 363.png 364.png 365.png 366.png 367.png 368.png 369.png 37.png 370.png 371.png 372.png 373.png 374.png 375.png 376.png 377.png 378.png 379.png 38.png 380.png 381.png 382.png 383.png 384.png 385.png 386.png 387.png 388.png 389.png 39.png 390.png 391.png 392.png 393.png 394.png 395.png 396.png 397.png 398.png 399.png 4.png 40.png 400.png 401.png 402.png 403.png 404.png 405.png 406.png 407.png 408.png 409.png 41.png 410.png 411.png 412.png 413.png 414.png 415.png 416.png 417.png 418.png 419.png 42.png 420.png 421.png 422.png 423.png 424.png 425.png 426.png 427.png 428.png 429.png 43.png 430.png 431.png 432.png 433.png 434.png 435.png 436.png 437.png 438.png 439.png 44.png 440.png 441.png 442.png 443.png 444.png 445.png 446.png 447.png 448.png 449.png 45.png 450.png 451.png 452.png 453.png 454.png 455.png 456.png 457.png 458.png 459.png 46.png 460.png 461.png 462.png 463.png 464.png 465.png 466.png 467.png 468.png 469.png 47.png 470.png 471.png 472.png 473.png 474.png 475.png 476.png 477.png 478.png 479.png 48.png 480.png 481.png 482.png 483.png 484.png 485.png 486.png 487.png 488.png 489.png 49.png 490.png 491.png 492.png 493.png 494.png 495.png 496.png 497.png 498.png 499.png 5.png 50.png 500.png 501.png 502.png 503.png 504.png 505.png 506.png 507.png 508.png 509.png 51.png 510.png 511.png 512.png 513.png 514.png 515.png 516.png 517.png 518.png 519.png 52.png 520.png 521.png 522.png 523.png 524.png 525.png 526.png 527.png 528.png 529.png 53.png 530.png 531.png 532.png 533.png 534.png 535.png 536.png 537.png 538.png 539.png 54.png 540.png 541.png 542.png 543.png 544.png 545.png 546.png 547.png 548.png 549.png 55.png 550.png 551.png 552.png 553.png 554.png 555.png 556.png 557.png 558.png 559.png 56.png 560.png 561.png 562.png 563.png 564.png 565.png 566.png 567.png 568.png 569.png 57.png 570.png 571.png 572.png 573.png 574.png 575.png 576.png 577.png 578.png 579.png 58.png 580.png 581.png 582.png 583.png 584.png 585.png 586.png 587.png 588.png 589.png 59.png 590.png 591.png 592.png 593.png 594.png 595.png 596.png 597.png 598.png 599.png 6.png 60.png 600.png 601.png 602.png 603.png 604.png 605.png 606.png 607.png 608.png 609.png 61.png 610.png 611.png 612.png 613.png 614.png 615.png 616.png 617.png 618.png 619.png 62.png 620.png 621.png 622.png 623.png 624.png 625.png 626.png 627.png 628.png 629.png 63.png 630.png 631.png 632.png 633.png 634.png 635.png 636.png 637.png 638.png 639.png 64.png 640.png 641.png 642.png 643.png 644.png 645.png 646.png 647.png 648.png 649.png 65.png 650.png 651.png 652.png 653.png 654.png 655.png 656.png 657.png 658.png 659.png 66.png 660.png 661.png 662.png 663.png 664.png 665.png 666.png 667.png 668.png 669.png 67.png 670.png 671.png 672.png 673.png 674.png 675.png 676.png 677.png 678.png 679.png 68.png 680.png 681.png 682.png 683.png 684.png 685.png 686.png 687.png 688.png 689.png 69.png 690.png 691.png 692.png 693.png 694.png 695.png 696.png 697.png 698.png 699.png 7.png 70.png 700.png 701.png 702.png 703.png 704.png 705.png 706.png 707.png 708.png 709.png 71.png 710.png 711.png 712.png 713.png 714.png 715.png 716.png 717.png 718.png 719.png 72.png 720.png 721.png 722.png 723.png 724.png 725.png 726.png 727.png 728.png 729.png 73.png 730.png 731.png 732.png 733.png 734.png 735.png 736.png 737.png 738.png 739.png 74.png 740.png 741.png 742.png 743.png 744.png 745.png 746.png 747.png 748.png 749.png 75.png 750.png 751.png 752.png 753.png 754.png 755.png 756.png 757.png 758.png 759.png 76.png 760.png 761.png 762.png 763.png 764.png 765.png 766.png 767.png 768.png 769.png 77.png 770.png 771.png 772.png 773.png 774.png 775.png 776.png 777.png 778.png 779.png 78.png 780.png 781.png 782.png 783.png 784.png 785.png 786.png 787.png 788.png 789.png 79.png 790.png 791.png 792.png 793.png 794.png 795.png 796.png 797.png 798.png 799.png 8.png 80.png 800.png 801.png 802.png 803.png 804.png 805.png 806.png 807.png 808.png 809.png 81.png 810.png 811.png 812.png 813.png 814.png 815.png 816.png 817.png 818.png 819.png 82.png 820.png 821.png 822.png 823.png 824.png 825.png 826.png 827.png 828.png 829.png 83.png 830.png 831.png 832.png 833.png 834.png 835.png 836.png 837.png 838.png 839.png 84.png 840.png 841.png 842.png 843.png 844.png 845.png 846.png 85.png 86.png 87.png 88.png 89.png 9.png 90.png 91.png 92.png 93.png 94.png 95.png 96.png 97.png 98.png 99.png".split(" ")
};

App.init();
