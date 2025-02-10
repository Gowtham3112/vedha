import { Component } from '@angular/core';

@Component({
  selector: 'app-natrualvssynthetic',
  templateUrl: './natrualvssynthetic.component.html',
  styleUrls: ['./natrualvssynthetic.component.scss']
})
export class NatrualvssyntheticComponent {

  

  dataSource =  [{feature: "Source",nlf: "Derived from the sap of the rubber tree (Hevea brasiliensis).",slf: "Produced using petrochemicals and synthetic materials."}, 
  {feature: "Production Process",nlf: "Extracted through a tapping process that involves collecting the milky sap from the rubber tree.",slf: "Made through a chemical process that involves the polymerization of monomers derived from petroleum or other chemical sources."},
  {feature: "Composition",nlf: "Contains natural proteins, organic compounds, and other materials from the rubber tree sap.",slf: "Consists of synthetic compounds such as styrene-butadiene rubber (SBR) or polyurethane."},
  {feature: "Smell",nlf: "Mild, earthy scent derived from rubber tree sap.",slf: "May have a stronger chemical odor compared to natural latex."},
  {feature: "Look & Color",nlf: "Off-white to slightly yellowish appearance.",slf: "Lighter in comparison to natural latex."},
  {feature: "Feeling",nlf: "Offers resilient, buoyant sensation and conforms well to the body.",slf: "Offers support but may lack some natural responsiveness."},
  {feature: "Weight",nlf: "Denser and heavier compared to synthetic latex.",slf: "Lighter in comparison to natural latex."},
  {feature: "Properties",nlf: "Highly elastic and resilient.",slf: "Can be less durable than natural latex."},
  {feature: "Price",nlf: "Generally more expensive than synthetic latex products.",slf: "Generally more affordable than natural latex."},
];

  displayedColumns:string[] = ['feature', 'nlf', 'slf'];

  

  getRowBackground(row: any, evenRowClass: string, oddRowClass: string): string {
    const rowIndex = this.dataSource.indexOf(row);
    return rowIndex % 2 === 0 ? evenRowClass : oddRowClass;
  }

}
