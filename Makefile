.PHONY: check-build check-dependencies analyze-package full-check clean

# Default target
help:
       @echo "Available commands:"
       @echo "  make check-build         - Check for build errors"
       @echo "  make check-dependencies  - Check for dependency issues"
       @echo "  make analyze-package     - Analyze package.json"
       @echo "  make full-check          - Run all checks"
       @echo "  make clean               - Remove log files"

# Check for build errors
check-build:
       @echo "Checking for build errors..."
       @npm run build > build.log 2>&1 || (echo "⛔ Build failed! See build.log for details"; cat build.log | grep -i "error"; exit 1)
       @echo "✅ Build successful!"

# Check for dependency issues
check-dependencies:
       @echo "Checking dependencies..."
       @npm ci > dependencies.log 2>&1 || (echo "⛔ Dependency installation failed! See dependencies.log for details"; cat dependencies.log | grep -i "error"; exit 1)
       @echo "✅ Dependencies installed successfully!"

# Analyze package.json
analyze-package:
       @echo "Analyzing package.json..."
       @if [ ! -f package.json ]; then echo "⛔ package.json not found!"; exit 1; fi
       @echo "📦 Project dependencies:"
       @cat package.json | grep -A 100 '"dependencies"' | grep -B 100 '"devDependencies"' | grep -v '"devDependencies"'
       @echo "🔧 Dev dependencies:"
       @cat package.json | grep -A 100 '"devDependencies"' | grep -B 100 -e '"scripts"' -e '$$' | grep -v '"scripts"'
       @echo "🚀 Scripts:"
       @cat package.json | grep -A 100 '"scripts"' | grep -B 100 -e '"dependencies"' -e '"devDependencies"' -e '$$' | grep -v '"dependencies"' | grep -v '"devDependencies"'
       @echo "✅ Analysis complete!"

# Run all checks
full-check: check-dependencies analyze-package check-build
       @echo "🎉 All checks passed successfully!"

# Clean log files
clean:
       @rm -f build.log dependencies.log
       @echo "🧹 Logs cleaned!"
