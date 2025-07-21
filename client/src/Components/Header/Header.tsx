import React, { useState, useEffect, useRef } from "react";
import { Bell, Sun, Moon, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HeaderContainer,
  Logo,
  LogoText,
  Nav,
  AuthButtons,
  MobileIcons,
  SearchBar,
  Controls,
  Button,
  SecondaryButton,
  IconButton,
  MobileMenuButton,
  MobileSearchButton,
  NotificationDot, } from "./Header.styles"; 

interface HorizontalHeaderProps {
  hasNotifications?: boolean;
  onSearch?: (query: string) => void;
  onThemeChange?: (theme: "light" | "dark") => void;
}

const HorizontalHeader: React.FC<HorizontalHeaderProps> = ({
  hasNotifications = false,
  onSearch,
  onThemeChange,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle theme change
  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    onThemeChange?.(newTheme);
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (showMobileSearch) setShowMobileSearch(false);
  };

  // Handle mobile search toggle
  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
    if (mobileMenuOpen) setMobileMenuOpen(false);
    
    // Focus search input when opened
    if (!showMobileSearch) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch?.(searchQuery.trim());
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('nav')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to focus search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      
      // Escape to close mobile menu/search
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setShowMobileSearch(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <HeaderContainer>
      <Logo>
        <LogoText>
          <div className="brand">Made4EC</div>
          <div className="slogan">Making people's life easy</div>
        </LogoText>
      </Logo>

      <Nav mobileOpen={mobileMenuOpen}>
     

        {mobileMenuOpen && (
          <>
            <AuthButtons>
              <Button 
                as={Link} 
                to="/registration"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Button>
              <SecondaryButton 
                as={Link} 
                to="/signin"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </SecondaryButton>
            </AuthButtons>
            <MobileIcons>
              <div style={{ position: 'relative' }}>
                <Bell size={20} />
                {hasNotifications && <NotificationDot />}
              </div>
              <div onClick={handleThemeToggle}>
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </div>
            </MobileIcons>
          </>
        )}
      </Nav>

      <SearchBar expanded={isSearchFocused} showMobileSearch={showMobileSearch}>
        <form onSubmit={handleSearchSubmit}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search healthcare services... (⌘K)"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </form>
        {/* <Search size={16} /> */}
      </SearchBar>

      <Controls>
        <Button as={Link} to="/registration">
          Get Started
        </Button>
        <SecondaryButton as={Link} to="/signin">
          Sign In
        </SecondaryButton>
        <IconButton style={{ position: 'relative' }}>
          <Bell size={20} />
          {hasNotifications && <NotificationDot />}
        </IconButton>
        <IconButton onClick={handleThemeToggle}>
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </IconButton>
      </Controls>

      <MobileSearchButton onClick={toggleMobileSearch}>
        {showMobileSearch ? <X size={20} /> : <Search size={20} />}
      </MobileSearchButton>

      <MobileMenuButton onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </MobileMenuButton>
    </HeaderContainer>
  );
};

export default HorizontalHeader;