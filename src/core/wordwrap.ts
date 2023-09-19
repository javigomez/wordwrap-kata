export function wordWrap(text: string, columnWidth: number) {
  return WrappableText.create(text).wordWrap(ColumnWidth.create(columnWidth));
}

export class ColumnWidth {
  private readonly width: number
  private constructor(width: number) {
    this.width = width
  }

  static create(width: number) {
    if (width < 0) throw new Error('Negative column width is not allowed')
    return new ColumnWidth(width)
  }
  value() {
    return this.width
  }
}

export class WrappableText {
  private constructor(private readonly text: string) {
  }

  static create(text: string) {
    if (text == null) {
      return new WrappableText('');
    }
    return new WrappableText(text)
  }
  value() {
    return this.text
  }

  wordWrap(columnWidth: ColumnWidth) {
    if (this.fitsIn(columnWidth)) {
      return this.value();
    }

    const wrappedText = this.wrappedText(columnWidth)
    const unwrappedText = this.unwrappedText(columnWidth)
    return wrappedText.concat(WrappableText.create(unwrappedText).wordWrap(columnWidth));
  }

  private fitsIn(columnWidth: ColumnWidth) {
    return this.text.length <= columnWidth.value()
  }

  private wrapIndex(columnWidth: ColumnWidth) {
    return this.shallWrapBySpace(columnWidth) ? this.indexOfSpace() : columnWidth.value();
  }

  private shallWrapBySpace(columnWidth: ColumnWidth) {
    return this.indexOfSpace() > -1 && this.indexOfSpace() < columnWidth.value();
  }

  private indexOfSpace() {
    return this.text.indexOf(' ');
  }

  private unwrapIndex(columnWidth: ColumnWidth) {
    return this.shallWrapBySpace(columnWidth) ? this.indexOfSpace() + 1 : columnWidth.value();
  }

  private wrappedText(columnWidth: ColumnWidth) {
    const wrapIndex = this.wrapIndex(columnWidth);
    return this.text.substring(0, wrapIndex).concat('\n');
  }

  private unwrappedText(columnWidth: ColumnWidth) {
    const unwrapIndex = this.unwrapIndex(columnWidth);
    return this.text.substring(unwrapIndex);
  }
}
