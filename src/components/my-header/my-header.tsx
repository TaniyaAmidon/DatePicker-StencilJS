import { Component, Prop } from "@stencil/core";

@Component({
  tag: "my-header",
  styleUrl: "my-header.css",
  shadow: true
})
export class MyHeader {
  @Prop() first: string;
  

  render() {
    return (
      <header>
        <nav>
          <h1>{this.first}</h1>
        </nav>
      </header>
    );
  }
}