import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FabricdetailsComponent } from 'src/app/dialogs/fabricdetails/fabricdetails.component';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-paddington',
  templateUrl: './paddington.component.html',
  styleUrls: ['./paddington.component.scss']
})
export class PaddingtonComponent {
  dataform:any;
  dataform1:any;
  dataform2: any;
  dataform3: any;
  dataform4: any;
  dataform5: any;
  dataform6: any;
  dataform7: any;
  dataform8: any;
  dataform9: any;
  dataform10: any;
  dataform11: any;
  dataform12: any;
  dataform13: any;
  dataform14: any;
  dataform15: any;
  dataform16: any;
  dataform17: any;
  iddatarou: any;


  constructor(public dialog: MatDialog,public routact:ActivatedRoute) { 

    this.dataform1 = {
      main: [
        {
          name: "PADDINGTON",
          image1: "assets/fabric/PADDINGTON/main3.png",
          image2: "assets/fabric/PADDINGTON/main2.png",
          file: "assets/fabric/PADDINGTON/PADDINGTON3.pdf",
        }
      ],
      small: [
        {
          mid:1,
          imgid:1,
          image: "assets/fabric/PADDINGTON/01.png",
          imageb: "assets/fabric/PADDINGTON/01bd.png",
          name: "Snow 01",
        }, {
          mid:1,
          imgid:2,
          image: "assets/fabric/PADDINGTON/02.png",
          imageb: "assets/fabric/PADDINGTON/02bd.png",
          name: "Calico 02",
        }, {
          mid:1,
          imgid:3,
          image: "assets/fabric/PADDINGTON/03.png",
          imageb: "assets/fabric/PADDINGTON/03bd.png",
          name: "Oak 03",
        }, {
          mid:1,
          imgid:4,
          image: "assets/fabric/PADDINGTON/04.png",
          imageb: "assets/fabric/PADDINGTON/04bd.png",
          name: "Pewter 04",
        },{
          mid:1,
          imgid:4,
          image: "assets/fabric/PADDINGTON/05.png",
          imageb: "assets/fabric/PADDINGTON/05bd.png",
          name: "Buff 05",
        },{
          mid:1,
          imgid:4,
          image: "assets/fabric/PADDINGTON/06.png",
          imageb: "assets/fabric/PADDINGTON/06bd.png",
          name: "Cafe 06",
        },{
          mid:1,
          imgid:4,
          image: "assets/fabric/PADDINGTON/07.png",
          imageb: "assets/fabric/PADDINGTON/07bd.png",
          name: "Bungee 07",
        },{
          mid:1,
          imgid:4,
          image: "assets/fabric/PADDINGTON/08.png",
          imageb: "assets/fabric/PADDINGTON/08bd.png",
          name: "Slate 08",
        },{
          mid:1,
          imgid:4,
          image: "assets/fabric/PADDINGTON/09.png",
          imageb: "assets/fabric/PADDINGTON/09bd.png",
          name: "Anchor 09",
        },{
          mid:1,
          imgid:4,
          image: "assets/fabric/PADDINGTON/10.png",
          imageb: "assets/fabric/PADDINGTON/10bd.png",
          name: "Cloud 10",
        },{
          mid:1,
          imgid:4,
          image: "assets/fabric/PADDINGTON/11.png",
          imageb: "assets/fabric/PADDINGTON/11bd.png",
          name: "Salmon 11",
        },{
          mid:1,
          imgid:4,
          image: "assets/fabric/PADDINGTON/12.png",
          imageb: "assets/fabric/PADDINGTON/12bd.png",
          name: "Spruce 12",
        },{
          mid:1,
          imgid:4,
          image: "assets/fabric/PADDINGTON/13.png",
          imageb: "assets/fabric/PADDINGTON/13bd.png",
          name: "Seaweed 13",
        },
      ],

    }


    this.dataform2 = {
      main: [
        {
          name: "ADORE",
          image1: "assets/fabric/adore digital/main.png",
          image2: "assets/fabric/adore digital/main1.png",
          file: "assets/fabric/adore digital/adore digital file (1)-1.pdf",
        }
      ],
      small: [
        {
          mid:2,
          imgid:1,
          image: "assets/fabric/adore digital/01.png",
          imageb: "assets/fabric/adore digital/01bd.png",
          name: "Pristine 01",
        }, {
          mid:2,
          imgid:2,
          image: "assets/fabric/adore digital/02.png",
          imageb: "assets/fabric/adore digital/02bd.png",
          name: "Mint 02",
        }, {
          mid:2,
          imgid:3,
          image: "assets/fabric/adore digital/03.png",
          imageb: "assets/fabric/adore digital/03bd.png",
          name: "Snow 03",
        }, {
          mid:2,
          imgid:4,
          image: "assets/fabric/adore digital/04.png",
          imageb: "assets/fabric/adore digital/04bd.png",
          name: "Morning 04",
        },{
          mid:2,
          imgid:5,
          image: "assets/fabric/adore digital/05.png",
          imageb: "assets/fabric/adore digital/05bd.png",
          name: "Linen 05",
        },{
          mid:2,
          imgid:6,
          image: "assets/fabric/adore digital/06.png",
          imageb: "assets/fabric/adore digital/06bd.png",
          name: "Crust 06",
        },{
          mid:2,
          imgid:7,
          image: "assets/fabric/adore digital/07.png",
          imageb: "assets/fabric/adore digital/07bd.png",
          name: "Stone 07",
        },{
          mid:2,
          imgid:8,
          image: "assets/fabric/adore digital/08.png",
          imageb: "assets/fabric/adore digital/08bd.png",
          name: "Canyon 08",
        },{
          mid:2,
          imgid:9,
          image: "assets/fabric/adore digital/09.png",
          imageb: "assets/fabric/adore digital/09bd.png",
          name: "Roasted 09",
        },{
          mid:2,
          imgid:10,
          image: "assets/fabric/adore digital/10.png",
          imageb: "assets/fabric/adore digital/10bd.png",
          name: "Nutty 10",
        },{
          mid:2,
          imgid:11,
          image: "assets/fabric/adore digital/11.png",
          imageb: "assets/fabric/adore digital/11bd.png",
          name: "Graphite 11",
        },{
          mid:2,
          imgid:12,
          image: "assets/fabric/adore digital/12.png",
          imageb: "assets/fabric/adore digital/12bd.png",
          name: "Earl 12",
        },{
          mid:2,
          imgid:13,
          image: "assets/fabric/adore digital/13.png",
          imageb: "assets/fabric/adore digital/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/adore digital/14.png",
          imageb: "assets/fabric/adore digital/14bd.png",
          name: "Blossom 14",
        },{
          mid:2,
          imgid:15,
          image: "assets/fabric/adore digital/15.png",
          imageb: "assets/fabric/adore digital/15bd.png",
          name: "Emerald 15",
        },{
          mid:2,
          imgid:16,
          image: "assets/fabric/adore digital/16.png",
          imageb: "assets/fabric/adore digital/16bd.png",
          name: "Nautical 16",
        }
      ],

    }


    this.dataform3 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }

    this.dataform4 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }


    this.dataform5 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }

    this.dataform6 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }

    this.dataform7 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }

    this.dataform8 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }


    this.dataform9 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }

    this.dataform10 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }

    this.dataform11 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }

    this.dataform12 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }

    this.dataform13 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }

    this.dataform14 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }
    this.dataform15 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }
    this.dataform16 = {
      main: [
        {
          name: "ALPACA",
          image1: "assets/fabric/ALPACA/main.png",
          image2: "assets/fabric/ALPACA/main1.png",
          file: "assets/fabric/ALPACA/ALPACA.pdf",
        }
      ],
      small: [
        {
          mid:3,
          imgid:1,
          image: "assets/fabric/ALPACA/01.png",
          imageb: "assets/fabric/ALPACA/01bd.png",
          name: "Pristine 01",
        }, {
          mid:3,
          imgid:2,
          image: "assets/fabric/ALPACA/02.png",
          imageb: "assets/fabric/ALPACA/02bd.png",
          name: "Mint 02",
        }, {
          mid:3,
          imgid:3,
          image: "assets/fabric/ALPACA/03.png",
          imageb: "assets/fabric/ALPACA/03bd.png",
          name: "Snow 03",
        }, {
          mid:3,
          imgid:4,
          image: "assets/fabric/ALPACA/04.png",
          imageb: "assets/fabric/ALPACA/04bd.png",
          name: "Morning 04",
        },{
          mid:3,
          imgid:5,
          image: "assets/fabric/ALPACA/05.png",
          imageb: "assets/fabric/ALPACA/05bd.png",
          name: "Linen 05",
        },{
          mid:3,
          imgid:6,
          image: "assets/fabric/ALPACA/06.png",
          imageb: "assets/fabric/ALPACA/06bd.png",
          name: "Crust 06",
        },{
          mid:3,
          imgid:7,
          image: "assets/fabric/ALPACA/07.png",
          imageb: "assets/fabric/ALPACA/07bd.png",
          name: "Stone 07",
        },{
          mid:3,
          imgid:8,
          image: "assets/fabric/ALPACA/08.png",
          imageb: "assets/fabric/ALPACA/08bd.png",
          name: "Canyon 08",
        },{
          mid:3,
          imgid:9,
          image: "assets/fabric/ALPACA/09.png",
          imageb: "assets/fabric/ALPACA/09bd.png",
          name: "Roasted 09",
        },{
          mid:3,
          imgid:10,
          image: "assets/fabric/ALPACA/10.png",
          imageb: "assets/fabric/ALPACA/10bd.png",
          name: "Nutty 10",
        },{
          mid:3,
          imgid:11,
          image: "assets/fabric/ALPACA/11.png",
          imageb: "assets/fabric/ALPACA/11bd.png",
          name: "Graphite 11",
        },{
          mid:3,
          imgid:12,
          image: "assets/fabric/ALPACA/12.png",
          imageb: "assets/fabric/ALPACA/12bd.png",
          name: "Earl 12",
        },{
          mid:3,
          imgid:13,
          image: "assets/fabric/ALPACA/13.png",
          imageb: "assets/fabric/ALPACA/13bd.png",
          name: "Fog 13",
        },{
          mid:2,
          imgid:14,
          image: "assets/fabric/ALPACA/14.png",
          imageb: "assets/fabric/ALPACA/14bd.png",
          name: "Blossom 14",
        },{
          mid:3,
          imgid:15,
          image: "assets/fabric/ALPACA/15.png",
          imageb: "assets/fabric/ALPACA/15bd.png",
          name: "Emerald 15",
        },{
          mid:3,
          imgid:16,
          image: "assets/fabric/ALPACA/16.png",
          imageb: "assets/fabric/ALPACA/16bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:17,
          image: "assets/fabric/ALPACA/17.png",
          imageb: "assets/fabric/ALPACA/17bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:18,
          image: "assets/fabric/ALPACA/18.png",
          imageb: "assets/fabric/ALPACA/18bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:19,
          image: "assets/fabric/ALPACA/19.png",
          imageb: "assets/fabric/ALPACA/19bd.png",
          name: "Nautical 16",
        },{
          mid:3,
          imgid:20,
          image: "assets/fabric/ALPACA/20.png",
          imageb: "assets/fabric/ALPACA/20bd.png",
          name: "Nautical 16",
        },
      ],

    }

  }

  panelOpenState = false;

  ngOnInit(): void {
    this.routact.params.subscribe(params => {
       this.iddatarou= params['id'];
      console.log("tparams",params['id']);
      this.routemethod(this.iddatarou)
      });
     
  
   
  }


  routemethod(event:any){
    console.log("event",event);
    console.log("this.iddatarou",this.iddatarou);
    if(this.iddatarou==1){
      this.dataform=this.dataform1;
    }else if(this.iddatarou==2){
      this.dataform=this.dataform2;
    }else if(this.iddatarou==3){
      this.dataform=this.dataform3;
    }else if(this.iddatarou==4){
      this.dataform=this.dataform4;
    }else if(this.iddatarou==5){
      this.dataform=this.dataform5;
    }else if(this.iddatarou==6){
      this.dataform=this.dataform6;
    }else if(this.iddatarou==7){
      this.dataform=this.dataform7;
    }else if(this.iddatarou==8){
      this.dataform=this.dataform8;
    }else if(this.iddatarou==9){
      this.dataform=this.dataform9;
    }else if(this.iddatarou==10){
      this.dataform=this.dataform10;
    }else if(this.iddatarou==11){
      this.dataform=this.dataform11;
    }else if(this.iddatarou==12){
      this.dataform=this.dataform12;
    }else if(this.iddatarou==13){
      this.dataform=this.dataform13;
    }else if(this.iddatarou==14){
      this.dataform=this.dataform14;
    }else if(this.iddatarou==15){
      this.dataform=this.dataform15;
    }else if(this.iddatarou==16){
      this.dataform=this.dataform16;
    }
  }


dialogu(event:any){
  const dialogRef = this.dialog.open(FabricdetailsComponent, {
    height: '95%',
    width: '34%',
    position: {
      left: '32%',
      right: '10%',
      top: '1vh',

      
    },
    data: {
      dataKey: event
    }

    
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The gallery dialog was closed');
   
    });
}

}
