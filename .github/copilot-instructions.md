## Copilot Instructions – .NET & Umbraco Project Standards

### General Guidelines

When working on .NET (Umbraco) projects in this repository, always follow these conventions to ensure consistency, maintainability, and centralized configuration.

---

### 1. Project Structure

* All production code must reside in the `src` folder
* Shared configuration must be defined at the `src` level
* Projects outside `src` (e.g. `examples`, `samples`) are excluded from these rules

---

### 2. Centralized Build Configuration

* Always use a `Directory.Build.props` file in the `src` folder
* Do not duplicate these settings in individual `.csproj` files

The file must contain:

```xml
<PropertyGroup>
  <TargetFramework>net10.0</TargetFramework>
  <ImplicitUsings>enable</ImplicitUsings>
  <Nullable>enable</Nullable>
  <WarningsAsErrors>Nullable</WarningsAsErrors>
</PropertyGroup>
```

---

### 3. Centralized Package Management

* Always use a `Directory.Packages.props` file in the `src` folder
* All NuGet package versions must be defined in this file
* `.csproj` files must NOT contain package versions

---

### 4. Package Reference Rules

#### Adding or Updating Packages

* Add or update packages in `Directory.Packages.props`
* Reference packages in `.csproj` without a version

Example:

```xml
<!-- Directory.Packages.props -->
<PackageVersion Include="Example.Package" Version="1.2.3" />
```

```xml
<!-- .csproj -->
<PackageReference Include="Example.Package" />
```

---

### 5. Umbraco Package Versioning (IMPORTANT)

All Umbraco packages must use a **version range** instead of a fixed version.

Required format:

```xml
Version="[17.0.0, 18.0.0)"
```

#### Rules:

* Applies to all packages starting with `Umbraco.*`
* Must be defined in `Directory.Packages.props`
* Never use fixed versions like `17.0.0`
* Never define Umbraco versions inside `.csproj` files

#### Example:

```xml
<PackageVersion Include="Umbraco.Cms" Version="[17.0.0, 18.0.0)" />
```

---

### 6. Exception

* Projects in the `examples` (or `samples`) folder may use different package versions
* These projects are not required to follow the Umbraco version range rule

---

### 7. Updating Existing Code

When modifying existing projects:

* Remove all `Version` attributes from `<PackageReference>` in `.csproj`
* Move all versions to `Directory.Packages.props`
* Convert Umbraco packages to the required version range format

---

### 8. Consistency First

* Prefer centralized configuration over duplication
* Follow existing patterns in the repository
* Keep all Umbraco dependencies aligned using the same version range

---

### Goal

Ensure all projects:

* Use centralized build and package configuration
* Apply consistent Umbraco versioning
* Are easy to maintain and upgrade
* Avoid version drift and duplication
