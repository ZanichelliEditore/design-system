import { ZPagination } from "./index";

describe("ZPagination test suite", () => {
  it("should set minimum page when a number out of range is passed", () => {
    const zPagination = new ZPagination();
    zPagination.totalPages = 10;

    zPagination.selectPage(-5);
    expect(zPagination.currentPage).toBe(1);

    zPagination.selectPage(15)
    expect(zPagination.currentPage).toBe(10);
  });

  it("should set the passed page", () => {
    const zPagination = new ZPagination();
    zPagination.totalPages = 10;

    zPagination.selectPage(5);
    expect(zPagination.currentPage).toBe(5);
  });

  it("should correctly extract page chunks", () => {
    const zPagination = new ZPagination();
    zPagination.totalPages = 10;
    zPagination.visiblePages = 4;
    zPagination.setVisiblePages();

    expect(zPagination.getPagesChunks().length).toBe(3);
  });

  it("should render the correct number of page when split enabled", () => {
    const zPagination = new ZPagination();
    zPagination.totalPages = 15;
    zPagination.split = 4;
    let pages = zPagination.renderSplitPages();

    expect(pages.length).toBe(zPagination.split * 2 + 5);

    zPagination.currentPage = 7;
    zPagination.split = 2;
    pages = zPagination.renderSplitPages();
    expect(pages.length).toBe(zPagination.split * 2 + 5);
  });
});
