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
  shirts :any[] =[
    {
      title: "WHAT IS THE RIGHT SIZE FOR ME?",
      display: 'none',
      innerText: "Please refer to sizing charts that accompany each product description. Take note that our women's shirts have a gender specific cut, meaning they are more fitted and have smaller sleeves. Our men's shirts are cut in a unisex style and look great on both men and women. "
    },
    {
      title: 'HOW ARE DODGE AND BURN SHIRTS PRINTED?',
      display: 'none',
      innerText: 'All our shirts are professionally screen printed by hand in America. Some of our designs are soft-handed to achieve a smooth, vintage look and feel. Other designs are printed with discharge ink which literally burns the existing pigment from the shirt leaving a beautiful, soft print. All our shirts are extremely detailed and require a high level of skill and accuracy to print. '
    },
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
      title: 'WHAT IS YOUR RETURN POLICY?',
      display: 'none',
      innerText: 'At Dodge & Burn, we have a 100% customer satisfaction policy. That means if you receive a shirt that is less than perfect, we will do our best to make it right. We personally pack each shirt and do our best to spot any defectives. However, you may receive a shirt that has a spot of unwanted printers ink on the sleeve, a sewing defect, or is otherwise less than perfect. If you are not 100% satisfied, please contact us immediately at support@dodgeandburn.com and we will get you a new shirt, refund, or work out another solution to make you happy.'
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
