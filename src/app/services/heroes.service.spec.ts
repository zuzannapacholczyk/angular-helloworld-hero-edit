import { TestBed, inject } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";

import { HeroesService } from "./heroes.service";

describe("HeroesService", () => {
  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      providers: [HeroesService]
    });
  });

  it("should be created", inject([HeroesService], (service: HeroesService) => {
    expect(service).toBeTruthy();
  }));
});
