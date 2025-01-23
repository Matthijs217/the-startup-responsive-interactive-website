# ABN AMRO Toegankelijkheids pagina

ABN AMRO wil een webpagina met een toegankelijkheidsverklaring om te voldoen aan de nieuwe Europese wetgeving die in midden 2025 ingaat.

## Beschrijving

Op de ABN AMRO toegankelijkheidspagina, volledig in de huisstijl, kan je lezen (uiteindelijk, er staat nu demo tekst) over de toeganklijkheid van de ABN AMRO. Hoe het vroeger was en nu. Ook kan je je eigen voorkeuren voor de website aanpasen. De navbar is expandable maar nog niet volledig. 

De website is mobile-first gemaakt en is daarom ook volledig responsive. De teskt die centraal staat op de site word groter narmate het scherm groter word. Vanaf 760px word het in een soort container gestopt en krijgt de achtergrondkleur net een andere tint wit / grijs. Hierdoor word de teskt als een soort a4'tje centraal gezet. De navbar krijgt een scrollbar zodat je tussen de verschillende onderwerpen kan scrollen. Ook worden bepaalde headers en teksten groter.
Je kan zeggen dat je de website in een donker contrast wilt of dat je links op de pagina in een nieuw venster wilt openen.

De website is redelijk toegankelijk. De dropdowns kunnen geopend worden met het toetsenbord, alleen is er een klein contrast probleem bij de footer en de knoppen.

Daarnaast heb ik nog een interactie gemaakt voor het wijzigen van je eigen toegankelijkheids voorkeuren. Je kan ervoor kiezen om bijvoorbeeld dark-mode aan te zetten of juist light-mode. Je kan ook zeggen dat je verminderde animaties wilt of dat je links op de pagina in een nieuw venster wilt openen als je erop klikt.

![image](https://github.com/user-attachments/assets/b69a1987-8c6b-48f8-b2fa-387555314cad)
-
![image](https://github.com/user-attachments/assets/16526f7e-0716-4628-a89e-fa49e4a66dad)
-

Bekijk [hier](https://matthijs217.github.io/the-startup-responsive-interactive-website/) de website zelf! 
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Responsive

**Small:** De website is op een klein scherm, de tekst staat centraal en verder zijn de teksten klein.
![image](https://github.com/user-attachments/assets/a37321cf-6745-40f2-a34a-7b284ed8d6de)

**Medium:** De website is op een medium scherm, de tekst word nog steeds centraal gezet door het witruimte te geven aan alle kanten.
![image](https://github.com/user-attachments/assets/5fd94301-854b-4eb7-bb35-6f659df2f35a)

**Large:** De website is op een large scherm, de tekst word nog steeds centraal gezet door nog meer witruimte te geven. De teksten zijn groter gemaakt om het beter te lezen en je scrollt niet meer in de navbar.
![image](https://github.com/user-attachments/assets/5f784db2-4e38-476e-9c24-f1b9da9dd0e9)



## Kenmerken

**HTML**

- Details
Ik heb het <code>details</code> element gebruikt voor de navbar om hem makkelijk uit te laten klappen
https://github.com/Matthijs217/the-startup-responsive-interactive-website/blob/main/index.html#L22-L33
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

**CSS**

- ::after
Ik heb gebruik gemaakt van de after element voor de pijltjes in de navbar, footer, buttons en in de dialog.
https://github.com/Matthijs217/the-startup-responsive-interactive-website/blob/main/styles/style.css#L241-L250

**JavaScript**

- showModal
Ik maakte ook gebruik van de showModal functie die bij de HTML tag dialog hoort. Hiermee kan je gemakkelijk een popup maken en dan een styling geven
https://github.com/Matthijs217/the-startup-responsive-interactive-website/blob/main/scripts/script.js#L15-L18

**Code Conventioes**

HTML
- Ik heb in de HTML er voor gezorgd dat er voldoende witruimte is en dat alles correct [inline](https://github.com/Matthijs217/the-startup-responsive-interactive-website/blob/main/index.html#L73)
- of op [block](https://github.com/Matthijs217/the-startup-responsive-interactive-website/blob/main/index.html#L129-L133) level zit. 

Volgorde en nesten van CSS selectors

- Ik heb ervoor gekozen om de elementen in een ander element [direct te nesten](https://github.com/Matthijs217/the-startup-responsive-interactive-website/blob/main/styles/style.css#L207-L225) in de css selectoren.
- Bij de elementen die gewoon [los staan](https://github.com/Matthijs217/the-startup-responsive-interactive-website/blob/main/styles/style.css#L80-L85
) van alles doe ik dat niet

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


