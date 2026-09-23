import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import Employee from './shared/models/Employee';
// import { EmployeeCardComponent } from './components/employee-card/employee-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emp-list';

  // @ViewChildren(EmployeeCardComponent) childs!: QueryList<EmployeeCardComponent>

  // @ViewChildren("employeeCard") cards!: QueryList<unknown>

  // @ViewChildren("li") links!: QueryList<ElementRef<HTMLLIElement>>
  // @ViewChildren("link") links!: QueryList<ElementRef<HTMLAnchorElement>>
  // @ViewChild("footer") footer!: ElementRef<HTMLElement>

  // constructor() {
  // setInterval(() => {
  //   console.log(this.childs.toArray())
  // }, 1000)

  // setTimeout(() => {
  //   this.cards.forEach(x => {
  //     console.log(x)
  //   })
  // }, 1000)

  // setInterval(() => {
  //   console.log(this.cards.toArray())
  // }, 1000)

  // setInterval(() => {
  //   console.log(this.links.toArray().map(x => x.nativeElement))
  //   this.links.forEach(x => {
  //     // x.nativeElement.style.boxShadow = "8px 8px 8px black"
  //     x.nativeElement.innerText = "Hello there"
  //   })
  // }, 1000)


  // }

  constructor(private renderer: Renderer2) {
    // setTimeout(() => {
    //   renderer.listen(this.links.toArray()[0].nativeElement, "mouseenter", () => {
    //     console.log("MOuse here")
    //     renderer.setStyle(this.links.toArray()[0].nativeElement, "background", "red")
    //   })
    // }, 1000)
    // setTimeout(() => {
    //   renderer.listen(this.links.toArray()[0].nativeElement, "mouseleave", () => {
    //     console.log("MOuse gone")
    //     renderer.removeStyle(this.links.toArray()[0].nativeElement, "background")
    //   })
    // }, 1000)

    // setTimeout(() => {
    //   this.links.map(x => x.nativeElement).forEach(n => {
    //     renderer.addClass(n, "alinks")
    //   })
    // },1000)
    // setTimeout(() => {
    //   this.links.map(x => x.nativeElement).forEach(n => {
    //     renderer.removeClass(n.children, "alinks")
    //   })
    // },2000)

    // setTimeout(() => {
    //   const elem = renderer.createElement("div");
    //   elem.innerHTML = "<h1>Helloooooo</h1>"
    //   renderer.appendChild(this.links.toArray()[0].nativeElement,elem)
    // },1000)

    // setTimeout(() => {
    //   const elem = renderer.createElement("h1");
    //   elem.innerText = "EmployeeList"
    //   renderer.appendChild(this.links.toArray()[0].nativeElement, elem)
    // }, 1000)

    // setTimeout(() => {
    //   this.links.map(x => x.nativeElement).forEach(n => {
    //     renderer.setAttribute(n, "href","/home")
    //   })
    // }, 1000)

    // setTimeout(() => {
    //   this.links.map(x => x.nativeElement).forEach(n => {
    //     const sibling = renderer.nextSibling(n)
    //     console.log(sibling)
    //   })
    // }, 1000)

    // setTimeout(() => {
    //   this.links.map(x => x.nativeElement).forEach(n => {
    //     console.log(renderer.setProperty(n, "innerText","HELOOOO"))
    //   })
    // }, 1000)

    // setTimeout(() => {
    //   console.log(this.footer.nativeElement.textContent)
    //   console.log(this.footer.nativeElement.innerText)
    //   console.log(this.footer.nativeElement.innerHTML)
    //   this.footer.nativeElement.innerHTML += "<br>&gt;"
    //   this.footer.nativeElement.innerText += "\n>"
    //   this.footer.nativeElement.textContent += "<"
    // }, 1000)

  }

}
