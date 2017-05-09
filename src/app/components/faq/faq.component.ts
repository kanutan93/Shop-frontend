import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: 'faq.component.html',
  styleUrls: ['faq.component.css']
})
export class FaqComponent implements OnInit {
  brand: any[] =[
    {
      title: "What does 'Dodge and Burn' mean?",
      display: 'none',
      innerText: 'Dodging and burning were originally a set of techniques used in the darkroom to control lightness, darkness and contrast on a photographic print. Dodging involves selectively blocking or "dodging" a part of the light-sensitive photographic paper during exposure so that the selected part of image receives less light. Burning is the opposite. These techniques are used to print beautiful photographs, where the shadows and highlights of an image are properly exposed. At Dodge and Burn, we take our inspiration from classic photography, cameras, and photographs. And frankly, we just think Dodge & Burn has a nice ring to it.'
    }
  ];

  store :any[] =[
    {
      title: 'WHAT FORMS OF PAYMENT DO YOU ACCEPT?',
      display: 'none',
      innerText: 'We accept major credit cards as well as PayPal. We do not accept American Express.'
    },
    {
      title: 'HOW SECURE IS THE DODGE AND BURN STORE?',
      display: 'none',
      innerText: "The Dodge and Burn store is certified Level 1 PCI DSS compliant,ensuring the highest level of shopping transaction and customer information security."
    },
    {
      title: 'DO YOU SELL WHOLESALE?',
      display: 'none',
      innerText: 'Yes. Please contact us if you are interested in carrying the Dodge and Burn brand.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  toggleFaq(faq){
    if(faq.display === 'none' ){
      faq.display = 'block'
    }
    else faq.display = 'none';
  }
}
