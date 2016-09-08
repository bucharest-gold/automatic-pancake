ci: test
	npm run integration
	npm run coverage

integration: lint
	npm run integration

test: lint
	npm run test

lint: node_modules
	npm run lint

clean:
	rm -rf node_modules

node_modules: package.json
	npm install

.PHONY: node_modules