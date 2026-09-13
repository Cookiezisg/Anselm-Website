# Anselm website — static Astro site for anselm.website (GitHub Pages).
MISE ?= $(shell command -v mise 2>/dev/null || printf '%s/.local/bin/mise' "$$HOME")
RUN := $(MISE) exec --

.DEFAULT_GOAL := help

help:
	@echo "Anselm website"
	@echo "  make setup    install the pinned Node toolchain and npm dependencies"
	@echo "  make dev      start the Astro dev server"
	@echo "  make build    build the static site into dist/"
	@echo "  make verify   type-check and build (the CI gate)"
	@echo "  make clean    remove dist/ and .astro/"

setup:
	@$(MISE) trust -q mise.toml; $(MISE) install
	@$(RUN) npm ci

dev:
	@$(RUN) npm run dev

build:
	@$(RUN) npm run build

verify:
	@$(RUN) npm run check
	@$(RUN) npm run build

clean:
	@rm -rf dist .astro

.PHONY: help setup dev build verify clean
