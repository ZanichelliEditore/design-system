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

  it("should correctly extract pages chunks", () => {
    const zPagination = new ZPagination();
    zPagination.totalPages = 10;
    zPagination.visiblePages = 4;
    zPagination.setVisiblePages();

    expect(zPagination.getPagesChunks().length).toBe(3);

    // when split is active, there will be a single chunk
    zPagination.split = 2;
    expect(zPagination.getPagesChunks().length).toBe(1);
  });
});
